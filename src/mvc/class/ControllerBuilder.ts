/**
 * @module common/mvc
 */
/** */
import * as Express from "express";
import {Type} from "../../core/interfaces/Type";
import {IRouterOptions} from "../interfaces";
import {ControllerRegistry} from "../registries/ControllerRegistry";
import {EndpointRegistry} from "../registries/EndpointRegistry";
import {ControllerProvider} from "./ControllerProvider";

import {EndpointBuilder} from "./EndpointBuilder";

export class ControllerBuilder {

    constructor(private provider: ControllerProvider, private defaultRoutersOptions: IRouterOptions = {}) {
        this.provider.router = Express.Router(Object.assign({}, defaultRoutersOptions, this.provider.routerOptions));
    }

    /**
     *
     * @returns {any}
     */
    build(): this {
        const ctrl = this.provider;

        EndpointRegistry.inherit(this.provider.useClass);

        ctrl.endpoints.map(endpoint => {
            new EndpointBuilder(endpoint, this.provider.router).build();
        });

        ctrl.dependencies
            .forEach((child: Type<any>) => {
                const ctrlMeta = ControllerRegistry.get(child);

                /* istanbul ignore next */
                if (!ctrlMeta) {
                    throw new Error("Controller component not found in the ControllerRegistry");
                }

                const ctrlBuilder = new ControllerBuilder(ctrlMeta, this.defaultRoutersOptions).build();

                this.provider.router.use(ctrlMeta.path, ctrlBuilder.provider.router);
            });

        return this;
    }

}