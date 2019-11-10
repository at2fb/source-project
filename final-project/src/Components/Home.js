import React, { useState, useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { fontSize } from '@material-ui/system';



export default function(){
    return(
        <div style={{margin: 0,}}>
            <h1 style={{fontSize: "50px",}}>WELCOME TO THE LANDING PAGE</h1>
            <Button>Sign Up</Button>
            <Button>Login</Button>
            <Button>Click to add number</Button>
        {/* <h1>{{number}}</h1> */}
        </div>
    )
}