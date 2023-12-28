import React from "react";
import PropExample from "../PropExample";

const Child = () => {
            return (
                        <div>Child Component</div>
            )
}
function FunctionalBasedComponent(){
            const parentComponentHandeler = () => {
                        console.log('hello from parent component');
            }

            return  (
                        <div>
                                    <Child />
                                    <PropExample parentComponentHandeler={parentComponentHandeler} flag1={false} flag={true} data="data123 as prop" />
                                    Functional Based Component
                        </div>
            )
}

export default FunctionalBasedComponent;