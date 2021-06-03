import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import {NavLink, useLocation} from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constant';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname===LOGIN_ROUTE

    return (
        <div>
        <Container className='d-flex justify-content-center align-items-center' style={{height:window.innerHeight - 54}}>

           <Card style={{width:600}} className='p-5'>
               <h2 className='m-auto'>{isLogin?'Авторизация':'Регистрация'}</h2>
            <Form className='d-flex flex-column'
> 
<Form.Control className='mt-3' placeholder='Введите Логин'/>

<Form.Control className='mt-3' placeholder='Введите Пароль' type="password"/>
<Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
{isLogin?

    <div> 
        Нет аккаунта ? <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйтесь</NavLink>
    </div>
            :
            <div> 
        Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
    </div>

}
    <Button variant='outline-success'> {isLogin ? 'Войти':'Зарегестрироваться'}</Button>
</Row>
            </Form>
           </Card>
        </Container>
        </div>
    );
};

export default Auth;