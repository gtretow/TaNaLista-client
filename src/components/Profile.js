import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import api from "../apis/api";

function Conta(props) {
  const [user, setUser] = useState("");
  const [sumProducts, setSumProducts] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get(
          `${process.env.REACT_APP_API_BASE}/profile`
        );
        setUser(response.data.user.name);
      } catch (err) {
        console.error(err);
      }
    }
    fetchUser();
  }, [props]);

  useEffect(() => {
    async function fetchList() {
      let tempCategories = [];
      let tempSumProducts = [];
      try {
        const response = await api.get(
          `${process.env.REACT_APP_API_BASE}/listas-criadas`
        );
        tempCategories = response.data.forEach((element) => {
          element.Lista.forEach((category) => {
            if (!tempCategories.includes(Object.keys(category)[0])) {
              tempCategories.push(Object.keys(category)[0]);
              tempSumProducts.push({ [Object.keys(category)[0]]: 0 });
            }
            tempSumProducts.map((e) =>
              Object.keys(e)[0] === Object.keys(category)[0]
                ? (e[Object.keys(category)[0]] += Object.values(
                    category
                  )[0].length)
                : e
            );
          });
          setSumProducts(tempSumProducts);
        });
      } catch (err) {
        console.error(err);
      }
    }
    fetchList();
  }, [user]);

  useEffect(() => {
    renderGraph();
  }, [sumProducts]);
  function renderGraph() {
    let ctx = document.getElementById("myChart");
    let myChart = new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: sumProducts.map((category) => Object.keys(category)[0]),
        datasets: [
          {
            label: "Produtos por categoria",
            data: sumProducts.map((category) => Object.values(category)[0]),
            backgroundColor: [
              "#393B39",
              "#469b59",
              "#caebca",
              "#505950",
              "#a1abad",
            ],
          },
        ],
      },
      options: "",
    });
  }

  return (
    <div className="bghistory3 bghistory2 grafic">
      <h3 className="mt-3 mb-3">
        Olá{" "}
        {user.split(" ")[0].slice(0, 1).toUpperCase() +
          user.split(" ")[0].slice(1).toLowerCase()}
        !
      </h3>
      <p>
        Aqui você conseguirá ver alguns dados bacanas sobre todas as listas já
        criadas por você!
      </p>
      <p>Como quantidade de produtos em cada categoria foram selecionados!</p>
      <canvas id="myChart"></canvas>
    </div>
  );
}

export default Conta;
