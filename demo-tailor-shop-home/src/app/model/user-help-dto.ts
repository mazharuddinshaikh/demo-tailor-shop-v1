import { UserHelpStepDto } from "./user-help-step-dto";

export interface UserHelpDto {
    title: string;
    description: string;
    helpStepsList: UserHelpStepDto[];
}
