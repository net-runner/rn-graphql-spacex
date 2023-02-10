import {TextInput, TextInputProps, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';
import styled from '@emotion/native';

interface SearchBarInterface extends TextInputProps {
	value: string;
	setValue: (val: string) => void;
}

export const SearchBar = ({value, setValue, ...rest}: SearchBarInterface) => {
	return (
		<SearchContainer>
			<Icon name="search1" size={24} color={'gray'} />
			<StyledInput value={value} onChange={e => setValue(e.nativeEvent.text)} {...rest} />
			{value !== '' && (
				<TouchableWithoutFeedback onPress={() => setValue('')}>
					<Icon name="cross" size={24} color={'gray'} />
				</TouchableWithoutFeedback>
			)}
		</SearchContainer>
	);
};

const SearchContainer = styled.View({
	flexDirection: 'row',
	marginHorizontal: 10,
	paddingHorizontal: 10,
	marginTop: 10,
	height: 45,
	backgroundColor: '#fff',
	borderRadius: 20,
});
const StyledInput = styled(TextInput)({
	color: 'gray',
	marginLeft: 10,
	flex: 1,
});
