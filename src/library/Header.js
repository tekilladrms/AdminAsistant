import react from "react";
import { Appbar } from "react-native-paper";

export const Header = (props) => {
    return (
        <Appbar.Header>
            <Appbar.BackAction />
            <Appbar.Content title='Home' />
        </Appbar.Header>
    );
}