import React from 'react';
import Button from "../Counter/Button";

type ButtonsType = {
    setNewValue: () => void
    editMode: boolean
    error: string
}

const Buttons = ({error, editMode, setNewValue}: ButtonsType) => {
    return (
        <div className={'buttons'}>
            <Button
                callBack={setNewValue}
                title={'set'}
                disabled={!!error || !editMode}
            />

        </div>
    );
};

export default Buttons;