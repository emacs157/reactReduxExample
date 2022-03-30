import { PopulationState } from './interfaces/population';
import { PrefecturesState } from './interfaces/prefectures';

export interface ReduxState {
    Prefectures: PrefecturesState;
    Population: PopulationState;
    _persist: {
        version: number;
        rehydrated: boolean;
    };
}
