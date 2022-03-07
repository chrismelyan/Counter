import React from 'react';

type SetInputType = {
    title: string
    callBack: () => void
}

const SetInput = (props: SetInputType) => {
    const onChangeHandler = (e:) => {
        props.callBack(e.currentTarget.value)
    }
    return (
        <span className={'input-display'}>
            {props.title}
            <input type={'number'} className={'input'} onChange={onChangeHandler}/>
        </span>
    );
};

export default SetInput;