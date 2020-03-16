import React, { Component } from 'react';
import { Container, Avatar, Typography, TextField, Button } from '@material-ui/core';
import LockOutlineIcon from "@material-ui/icons/LockOutlined";
import { compose } from 'recompose';
import { consumerFirebase } from '../../server';


const style={
    paper:{
        marginTop: 9,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: 5,
        backgroundColor: "red"
    },
    form: {
        width: "100%",
        marginTop: 8
    },
    submit: {
        marginTop: 10,
        marginBottom: 20
    }
    
}


class Login extends Component {

    state = {
        firebase: null,
        usuario : {
            email : '',
            password: ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){

        if(nextProps.firebase === prevState.firebase){
            return null;    
        }

        return {
            firebase : nextProps.firebase
        }
    }

    onChange = e =>{
        let usuario = Object.assign({},this.state.usuario);
        usuario[e.target.name] = e.target.value;
        this.setState({
            usuario : usuario
        })
    }

    login = async e => {
        e.preventDefault();
        const { firebase, usuario } = this.state;
        firebase.auth
        .signInWithEmailAndPassword(usuario.email, usuario.password)
        .then(auth => {
           this.props.history.push('/ingreso')
           console.log('exitoso')
        })
         .catch(error => {
             console.log(error);
         })
    
      }
    render() {
        return (
           <Container maxWidth="xs">
               <div style={style.paper}>
                    <Avatar style={style.avatar}>
                        <LockOutlineIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Ingrese Usuario
                    </Typography>
                    <form style={style.form}>
                         <TextField 
                            variant="outlined"
                            label="E=Mail"
                            name="email"
                            fullWidth
                            margin="normal"
                            onChange = {this.onChange}
                            value = {this.state.usuario.email || ''}
                         />
                         <TextField 
                            variant="outlined"
                            label="Password"
                            type="password"
                            name="password"
                            fullWidth
                            margin="normal"
                            onChange = {this.onChange}
                            value = {this.state.usuario.password}
                         />
                         <Button
                         type="submit"
                         fullWidth
                         variant="contained"
                         color="primary"
                         onClick={this.login}
                         style={style.submit}
                         >
                             Enviar
                         </Button>
                    </form>
               </div>
           </Container>
        );
    }
}

export default compose(consumerFirebase)(Login);