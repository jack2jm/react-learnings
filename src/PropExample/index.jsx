import React from "react";

const PropExample = (props) => {
            const {flag, flag1, data, parentComponentHandeler, getValueFromChild} = props;
            console.log(props);
            const clickHandler = () => {
                        getValueFromChild(5);
            }
            return (

                        <div>
                                    {
                                                flag && data
                                    }
                                    <br/>
                                    {
                                                flag1 ? data : 'flag1 is false'
                                    }
                                    <br/>
                                    Prop Example Component
                                    <br/>
                                    <button onClick={parentComponentHandeler}>Click</button>
                                    <button onClick={clickHandler}>Click to pass value to parent</button>
                        </div>
            )
}

export default PropExample;