import {FlatList} from 'react-native';
import React, {useMemo, useState} from 'react';
import styled from '@emotion/native';
import {useQuery} from '@apollo/client';
import {MainHeader} from './MainHeader';
import {GET_LAUNCHES} from '../../graphql/getLaunches';
import {LaunchItem} from './LaunchItem';
import {GetLaunchesQuery, GetLaunchesQueryVariables} from '../../generatedGraphQL/graphql';
import {ErrorHandler} from '../ErrorHandler';
import {Button} from '../Button';

export const MainScreen = () => {
	const [offset, setOffset] = useState(1);

	const {refetch, loading, error, data} = useQuery<GetLaunchesQuery, GetLaunchesQueryVariables>(GET_LAUNCHES, {
		fetchPolicy: 'cache-first',
	});

	const reversedData = useMemo(() => {
		if (data?.launches) {
			return [...data.launches];
		}
		return [];
	}, [data?.launches]);

	const filteredData = useMemo(() => {
		return reversedData.slice(0, 20 * offset);
	}, [reversedData, offset]);

	return (
		<ErrorHandler loading={loading} error={error} retry={refetch}>
			<FlatList
				testID={'flaslist'}
				data={filteredData}
				ListHeaderComponent={MainHeader}
				renderItem={({item}) => <LaunchItem item={item} />}
				ListFooterComponent={() => (
					<StyledButton
						testID={'load-more-launches'}
						onPress={() => {
							setOffset(offset => offset + 1);
						}}
						title="Load more launches"
					/>
				)}
			/>
		</ErrorHandler>
	);
};

const StyledButton = styled(Button)({
	marginBottom: 60,
});
