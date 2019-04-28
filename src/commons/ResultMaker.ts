import { ErrorCode, ErrorMsg } from "./constants/errorCode";
import { ApiResultType, ArrayResultType, DataResultType } from "./type/resultType";

/**
 * Result json 생성자
 */
class ResultMaker{
    
    static makeResult(code: ErrorCode, msg: ErrorMsg): ApiResultType {
        return { code: code , msg: msg }
    }

    static makeArrayResult<T>(code: ErrorCode, msg: ErrorMsg, data: Array<T>) : ArrayResultType<T>{
        return { code: code 
                , msg: msg
                , size: data.length
                , list: data}; 
    }

    static makeDataResult<T>(code: ErrorCode, msg: ErrorMsg, arg: T) : DataResultType<T>{
        return { code: code 
                , msg: msg
                , data: arg}; 
    }
}

export default ResultMaker;