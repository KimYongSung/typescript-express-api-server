import { ErrorCode, ErrorMsg } from "../constants/ErrorCode";

/**
 * API JSON 결과 타입
 */
type ApiResultType = {
    code: ErrorCode,
    msg: ErrorMsg
}

/**
 * 리스트 결과 타입
 */
type ArrayResultType<T> = {
    code: ErrorCode,
    msg: ErrorMsg,
    size: number,
    list: Array<T>
}

/**
 * 리스트 결과 타입
 */
type DataResultType<T> = {
    code: ErrorCode,
    msg: ErrorMsg,
    data: T
}

export { ApiResultType, ArrayResultType, DataResultType };