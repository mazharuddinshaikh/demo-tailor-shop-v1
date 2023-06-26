import { UserHelpDto } from "./user-help-dto";

export interface ApiResponseUserHelp {
    httpStatus: number;
    message: string;
    result: UserHelpDto[];
}
