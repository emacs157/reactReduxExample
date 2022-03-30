import { STATUS } from '../literal';

export interface PrefectureResult {
    prefCode: number;
    prefName: string;
}

export interface PrefecturesState {
    status: typeof STATUS[keyof typeof STATUS];
    results: PrefectureResult[];
}
