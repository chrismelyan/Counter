import React from 'react';
import Button from "../Button";

type SetButtonType = {
    setValue: () => void
}

const SetButton = (props: SetButtonType) => {
    return (
        <div>
            {/*<Button title={'set'} callBack={props.setValue} disabled={} />*/}
        </div>
    );
};

export default SetButton;