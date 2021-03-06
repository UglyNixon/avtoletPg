import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import {  Button,  Form, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { createProduct } from '../../http/ProductApi';

const CreateProductPage = observer(({show,onHide}) => {

  const [value,setValue]=useState('')
const clickCreate=()=>{
  createProduct({title:value}).then(data=>setValue('')).then(alert('Готово!'))
}
    return ( 
       
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Добавить продукцию
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
    <Form>
    <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Название продукта</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      placeholder='Введите название...'
      value={value}
      onChange={(e)=>setValue(e.target.value)}
    />
    </InputGroup>

    </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={()=>clickCreate()}>Добавить</Button>
        <Button variant="warning" onClick={()=>{setValue('');onHide()}}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
        
    );
})

export default CreateProductPage;