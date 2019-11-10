import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { fontSize } from '@material-ui/system';
import './CSS Files/LandingPage.css';

export default function(){
    return(
        <div class="header">
            <p class = "title">WELCOME TO THE LANDING PAGE</p>
            <div class="buttons">
                <Button>Sign Up</Button>
                <Button>Login</Button>
            </div>
        </div>
    )
}