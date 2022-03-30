import { Checkbox, FormControlLabel, Grid, Paper } from '@mui/material';
import { PopulationState } from '../../../assets/interfaces/population';
import {
    PrefectureResult,
    PrefecturesState,
} from '../../../assets/interfaces/prefectures';

const PrefecturesComponent = (props: {
    prefectures: PrefecturesState;
    population: PopulationState;
}): JSX.Element => {
    return (
        <>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2 }}>
                        <Grid container>
                            {props.prefectures.results &&
                                props.prefectures.results.map(
                                    (
                                        prefecture: PrefectureResult,
                                        index: number
                                    ) => (
                                        <Grid item key={index}>
                                            <FormControlLabel
                                                style={{
                                                    display: 'inline-block',
                                                }}
                                                control={<Checkbox />}
                                                checked={true}
                                                label={prefecture.prefName}
                                                data-testid={index}
                                            />
                                        </Grid>
                                    )
                                )}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};
export default PrefecturesComponent;
