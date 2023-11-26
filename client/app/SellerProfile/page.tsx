"use client";
import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./page.module.css";
import {
  Button,
  Dropdown,
  Space,
  Modal,
  Form,
  Input,
  Select,
  Upload,
  message,
  Popconfirm,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import Chose from "./chosse";

import axios from "axios";
interface Product {
  productName: string;
  Productdescription: string;
  Productprice: string;
  Productstock: string;
  Category: string;
  image: string | null;
}

const Index: React.FC = () => {
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>(null);
  const [file,setFile]=useState<Event>()
  const [imageLink,setImageLink]=useState()
  const uploadImage =async () => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "farescloud");
    console.log(form)
    await axios.post("https://api.cloudinary.com/v1_1/dt7t7wjql/upload", form).then((res) => {
      console.log(res.data.secure_url)
      setImageLink(res.data.secure_url)
     
    })
    .catch((err)=>{console.log(err)})
  };

  const handleUpdateSubmit = async (values: { newProductName: string }) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/products/${selectedProduct.id}`,
        {
          description: values.newProductName,
        }
      );
      console.log(selectedProduct)

      message.success("Product updated successfully!");
      setIsUpdateModalVisible(false);
      window.location.reload();
    } catch (error) {
      console.error("Error updating product:", error);
      message.error("Failed to update product.");
    }
  };

  const confirm = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.success("Click on Yes");
  };

  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error("Click on No");
  };

  const [sellerData, setSellerData] = useState<any[]>([]);
  const [sellerp, setSellerp] = useState<any[]>([]);
  const userID = 8;

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/products/${productId}`);
      message.success("Product deleted successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting product:", error);
      message.error("Failed to delete product.");
    }
  };

  const fetchSellerData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/sellers/${userID}`
      );
      setSellerData(response.data.user);
      setSellerp(response.data.products);
      console.log("Seller data:", response.data.products);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchSellerData();
  }, []);
  const success = () => {
    message.success("Product added successfully!");
    window.location.reload();
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const items = [
    {
      key: "1",
      label: (
        <a
          role="button"
          tabIndex={0}
          onClick={() => setIsModalVisible(true)}
          style={{ outline: "none" }}
        >
          add Product
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          check your sells
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          notification
        </a>
      ),
    },
  ];

  const handleFormSubmit = async (values: Product) => {
    console.log("Received values of form: ", values);
    console.log(values.Category);
    setIsModalVisible(false);
    console.log("desc", values.Productdescription);
    console.log("productName", values.productName);
    console.log("price", values.Productprice);
    console.log("stock", values.Productstock);
    console.log("Category", values.Category);

    try {
      const response = await axios.post("http://localhost:3000/products/", {
        name: values.productName,
        description: values.Productdescription,
        price: parseFloat(values.Productprice),
        stock: parseInt(values.Productstock),
        Category: values.Category,
        image: imageLink,
        UserId: userID,
      });
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.BackgroundImage}>
        <div
          className={styles.CoverImage}
          style={{ backgroundImage: `url(${sellerData.imageCover})` }}
        ></div>
        <div className={styles.photoContainer}>
          <div className={styles.addphoto}></div>
          <img
              className={styles.profilepic}
              src={sellerData.imageProfile}
              alt="Profile"
          />
        </div>
        <Space direction="vertical" className={styles.setting}>
          <Space wrap>
            <Dropdown menu={{ items }} placement="bottom">
              <Button className={styles.setting}>Settings</Button>
            </Dropdown>
          </Space>
        </Space>
        <div className={styles.profilname}>
          {sellerData.firstName} {sellerData.lastName}
        </div>
        <div className={styles.subname}>@{sellerData.firstName} </div>
        <div className={styles.bio}>
          hello my name is {sellerData.firstName} and i'm seller i want to start
          my own buisness
        </div>
        <div className={styles.photoGa}>
          {sellerp.map((product, i) => (
            <img
              key={i}
              className={styles[`picprod${i + 1}`]}
              src={product.image || "https://via.placeholder.com/95x91"}
              alt="Product"
            />
          ))}
        </div>
        <div className={styles.categoryname}>Photos</div>
        <div className={styles.SeeAllPhotos}>See All Photos</div>
        <div className={styles.productContainer}>
          {sellerp.map((product, i) => (
            <div key={i} className={styles.productItem}>
              <img
                className={styles.profilepicture}
                src={sellerData.imageProfile}
              />
              <div className={styles.profilename}>
                {sellerData.firstName} {sellerData.lastName}
              </div>
              <div className={styles.tag}>@{sellerData.firstName}</div>
              <div className={styles.time}>4m</div>
              <div className={styles.comment}>{product.description}</div>
              <img
                className={styles.post}
                src={product.image || "https://via.placeholder.com/666x426"}
                alt="Post"
              />

              <Popconfirm
                title="Delete this product"
                description="Are you sure to delete this product ?"
                onConfirm={() => handleDeleteProduct(product.id)}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  danger
                  shape="circle"
                  icon={<DeleteOutlined />}
                  className={styles.delete}
                />
              </Popconfirm>
              <Popconfirm
              title="Update this product"
              description="Are you sure to update this product ?"
              onConfirm={() => {
                setSelectedProduct(product);
                setIsUpdateModalVisible(true);
              }}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button
                danger
                shape="circle"
                icon={<EditOutlined />}
                className={styles.update}
              />
            </Popconfirm>
            </div>
          ))}
        </div>
      </div>
      <Modal
        title="Add Product"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form onFinish={handleFormSubmit}>
          <Form.Item
            name="productName"
            label="Product Name"
            rules={[{ required: true, message: "Please enter product name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Productdescription"
            label="description"
            rules={[{ required: true, message: "Please enter description" }]}
          >
            <Input />
          </Form.Item>{" "}
          <Form.Item
            name="Productstock"
            label="Product stock"
            rules={[{ required: true, message: "Please enter your stock" }]}
          >
            <Input />
          </Form.Item>{" "}
          <Form.Item
            name="Productprice"
            label="Product price"
            rules={[{ required: true, message: "Please enter price" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Category"
            label="Category"
            rules={[{ required: true, message: "Please select a category" }]}
          >
            <Select>
              <Select.Option value="Furniture">Furniture</Select.Option>
              <Select.Option value="Decor">Decor</Select.Option>
              <Select.Option value="Accessories">Accessories</Select.Option>
              <Select.Option value="Vintage">Vintage</Select.Option>
              <Select.Option value="Tools">Tools</Select.Option>
            </Select>
          </Form.Item>

          {/* <Form.Item
            name="image"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            onMetaChange={()=>console.log(normFile)}
          >
            <Upload action="/upload.do" listType="picture-card" >
              <div >
                <PlusOutlined />
                <div style={{ marginTop: 8 }} >Upload</div>
              </div>
            </Upload>
          </Form.Item>
           */}

           <input type="file" onChange={(e:Event)=>{setFile(e?.target.files[0] as HTMLInputElement)}}/>
           <Button onClick={()=>uploadImage()} className={styles.add}>
           <PlusOutlined  />
              Add to
            </Button>
            

          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={success}>
              Add to your profile
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
  title="Update Product"
  open={isUpdateModalVisible}
  onCancel={() => setIsUpdateModalVisible(false)}
  footer={null}
>
  <Form onFinish={handleUpdateSubmit}>
    <Form.Item
      name="newProductName"
      label="New Product desc"
      rules={[
        { required: true, message: "Please enter a new product name" },
      ]}
    >
      <Input placeholder="Enter new product name" />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Update
      </Button>
    </Form.Item>
  </Form>
</Modal>
    </div>
  );
};

export default Index;
