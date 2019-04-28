
/**
 * 에러코드 enum
 */
enum ErrorCode{

    /**
     * 성공
     */
    CD_0000 = "0000",

    /**
     * 시스템 에러
     */
    CD_S999 = "S999"
}

/**
 * 에러메시지 enum
 */
enum ErrorMsg{
    /**
     * 성공
     */
    CD_0000 = "SUCCESS",
    
    /**
     * 시스템 에러
     */
    CD_S999 = "시스템에러"
}

export { ErrorCode, ErrorMsg };