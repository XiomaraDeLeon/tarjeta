import React, { useState, useEffect } from "react";
import contactService from "../services/contacto.service";
import { Space, Table, PageHeader } from "antd";
const Home = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await contactService.getContacts();
      console.log(data.data);
      setContacts(data.data);
    };
    getData();
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Numero",
      dataIndex: "numero",
      key: "numero",
      render: (_, record) => (
        <Space size="middle">
          {record.numero}
          <a>Agregar</a>
          <a>ver Numeros</a>
        </Space>
      ),
    },
    {
      title: "Tipo Telefono",
      dataIndex: "tipo",
      key: "tipo",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Editar</a>
          <a>Eliminar</a>
        </Space>
      ),
    },
  ];

  const data = contacts.map((item) => ({
    key: item.id,
    name: item.nombreContacto,
    email: item.correoElectronico,
    numero: "12345678",
    tipo: "movil",
  }));

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Tus Contactos"
        subTitle="Detalles de tus contactos"
      />
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default Home;
