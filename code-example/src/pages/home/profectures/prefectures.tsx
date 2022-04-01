import { Checkbox, FormControlLabel, Grid, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
	PopulationResultState,
	PopulationState,
} from '../../../assets/interfaces/population';
import {
	PrefectureResult,
	PrefecturesState,
} from '../../../assets/interfaces/prefectures';
import {
	getPopulationStartAction,
	removePopulationAction,
} from '../../../redux/actions/population';
import React, { ChangeEvent } from 'react';

const PrefecturesComponent = (props: {
	prefectures: PrefecturesState;
	population: PopulationState;
}): JSX.Element => {
	// console.log(props.prefectures);
	const dispatch = useDispatch();

	const isChecked = (prefName: string): boolean => {
		const names = props.population.results.map(
			(populationResult: PopulationResultState) => populationResult.name
		);

		return names.includes(prefName);
	};

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		prefName: string,
		prefCode: number
	) => {
		// console.log(event.target.checked);
		// console.log(event.target);
		// console.log(prefCode);
		event.target.checked
			? dispatch(
					getPopulationStartAction({
						prefName,
						prefCode,
						cityCode: '-',
					})
			  )
			: dispatch(
					removePopulationAction({
						prefName,
						prefCode,
						cityCode: '-',
					})
			  );
		// setSpacing(Number((event.target as HTMLInputElement).value));
	};

	return (
		<>
			<Grid sx={{ flexGrow: 1 }} container spacing={2}>
				<Grid item xs={12}>
					<Paper sx={{ p: 2 }}>
						<Grid container>
							{props.prefectures.results &&
								props.prefectures.results.map(
									(prefecture: PrefectureResult, index: number) => (
										<Grid item key={index}>
											<FormControlLabel
												style={{
													display: 'inline-block',
												}}
												data-testid={prefecture.prefName}
												control={<Checkbox />}
												checked={isChecked(prefecture.prefName)}
												label={prefecture.prefName}
												onChange={(
													event: React.SyntheticEvent<Element, Event>
												) =>
													handleChange(
														event as ChangeEvent<HTMLInputElement>,
														prefecture.prefName,
														prefecture.prefCode
													)
												}
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
