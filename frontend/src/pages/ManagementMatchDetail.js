import * as React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ManagementListDetail() {
  const { request_id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post('/matchinglist', { request_id:request_id })
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  }, []);

  return (
      <div>
        {data.map((item, idx) => (
            <div key={idx}>
              {item}
              <button>ㅇ</button>
            </div>
        ))}
      </div>
  );
}
