import {Store} from "../../../core/class/Store";
/**
 * @module common/mvc
 */
/** */
import {UseAfter} from "./useAfter";
/**
 * Sets the Content-Type HTTP header to the MIME type as determined by mime.lookup() for the specified type.
 * If type contains the “/” character, then it sets the `Content-Type` to type.
 *
 * ```typescript
 *  @ContentType('.html');              // => 'text/html'
 *  @ContentType('html');               // => 'text/html'
 *  @ContentType('json');               // => 'application/json'
 *  @ContentType('application/json');   // => 'application/json'
 *  @ContentType('png');                // => image/png
 *  private myMethod() {}
 * ```
 *
 * @param type
 * @returns {Function}
 * @decorator
 */
export function ContentType(type: string): Function {

    return <T>(target: Function, targetKey: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> => {

        Store
            .from([target, targetKey, descriptor])
            .merge("produces", type);

        return UseAfter((request: any, response: any, next: any) => {

            if (!response.headersSent) {
                response.type(type);
            }

            next();

        })(target, targetKey, descriptor);
    };
}
