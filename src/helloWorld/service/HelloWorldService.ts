import { ErrorCode, ErrorMsg } from "../../commons/constants/ErrorCode";
import { ApiResultType, ArrayResultType } from "../../commons/type/ResultType";
import ResultMaker from "../../commons/ResultMaker";

/**
 * HelloWorld 서비스
 */
class HelloWorldService{

    /**
     * helloWorld json
     */
    public helloWorld() : ApiResultType { 
        console.log("call helloWorld");
        return ResultMaker.makeResult(ErrorCode.CD_0000, ErrorMsg.CD_0000); 
    }

    /**
     * helloWorld json
     */
    public arrayResult() : ArrayResultType<string> { 
        console.log("call helloWorld");
        let values = ["test","test1","test2"];
        return ResultMaker.makeArrayResult(ErrorCode.CD_0000, ErrorMsg.CD_0000, values); 
    }

    /**
     * helloWorld
     */
    public helloWorldView() : string {
        console.log("call helloWorld view");
        return "helloWorld/helloWorld.html";
    }

    public errorHandler(error: any) : ApiResultType {
        return ResultMaker.makeResult(ErrorCode.CD_S999, ErrorMsg.CD_S999);
    }
}

export default HelloWorldService;