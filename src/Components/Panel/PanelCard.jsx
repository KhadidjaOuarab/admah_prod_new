import React from "react";
import { Panel } from "primereact/panel";
import { Ripple } from "primereact/ripple";
import InputMask from "../Input/InputMask";
import DropDownClear from "../Input/DropDownAdvanced";
import PrimeButton from "../Button/ButtonPrimeIcon";
import { Routes, Route, Link, Await } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProductAction } from "../../Redux/actions/actions";
import useFetch from "../../Custom Hook/useFetch";
import useAxios from "../../Custom Hook/useAxios";
const PanelCard = () => {
  const [documentNumber, setDocumentNumber] = useState(null);
  const [selectedAdmType, setSelectedAdmType] = useState(null);
  const [admNumber, setAdmNumber] = useState(null);
  //const [agents, setAgents] = useState([]);
  const [agent, setAgent] = useState(null);
  const [products, setProducts] = useState([{}]);

  // const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const admTypes = [
    { name: "Issue", code: "Issue" },
    { name: "Refund", code: "Refund" },
    { name: "Flown", code: "Flown" },
    { name: "Exchange", code: "Exchange" },
  ];

  const template = (options) => {
    const toggleIcon = options.collapsed
      ? "pi pi-chevron-down"
      : "pi pi-chevron-up";
    const className = `${options.className} justify-content-start`;
    const titleClassName = `${options.titleClassName} pl-1`;

    return (
      <div className={className}>
        <button
          className={options.togglerClassName}
          onClick={options.onTogglerClick}
        >
          <span className={toggleIcon}></span>
          <Ripple />
        </button>
        <span className={titleClassName}>Search</span>
      </div>
    );
  };

  /**************************************************************** */
  //const { products :prod, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
  const SearchAdmFunction = () => {
    console.log("response.ok");
    if (
      documentNumber == null &&
      agent == null &&
      user == null &&
      admNumber == null &&
      selectedAdmType == null
    ) {
      axios
        .get("http://localhost:4000/Adms/AllAdms")
        .then((response) => {
          setProducts(response.data);
          console.log(products);
          dispatch(setProductAction(response.data));
          console.log(products);
        })
        .catch((error) => {
          console.log(error.value);
        });
      //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
    } else {
      if (
        documentNumber != null &&
        agent == null &&
        user == null &&
        admNumber == null &&
        selectedAdmType == null
      ) {
        axios
          .get(
            "http://localhost:4000/Adms/AllAdmsFilterDocNum/" + documentNumber
          )
          .then((response) => {
            setProducts(response.data);
            console.log("products1products1products1products1");
            console.log(response.data);
            console.log("products1products1products1products1");
            dispatch(setProductAction(response.data));
            // ©
          })
          .catch((error) => {
            console.log(error.value);
          });
      } else {
        if (
          documentNumber == null &&
          agent != null &&
          user == null &&
          admNumber == null &&
          selectedAdmType == null
        ) {
          axios
            .get(
              "http://localhost:4000/Adms/AllAdmsFilterAgent/" +
                agent["Agency Code"]
            )
            .then((response) => {
              setProducts(response.data);
              console.log(products);
              dispatch(setProductAction(response.data));
              // console.log(products);
            })
            .catch((error) => {
              console.log(error.value);
            });
        } else {
          if (
            documentNumber == null &&
            agent == null &&
            user != null &&
            admNumber == null &&
            selectedAdmType == null
          ) {
            axios
              .get(
                "http://localhost:4000/Adms/AllAdmsFilterUser/" +
                  user["username"]
              )
              .then((response) => {
                setProducts(response.data);
                console.log(products);
                dispatch(setProductAction(response.data));
                //  console.log(products);
              })
              .catch((error) => {
                console.log(error.value);
              });
          } else {
            if (
              documentNumber == null &&
              agent == null &&
              user == null &&
              admNumber != null &&
              selectedAdmType == null
            ) {
              axios
                .get(
                  "http://localhost:4000/Adms/AllAdmsFilterAdmNum/" + admNumber
                )
                .then((response) => {
                  setProducts(response.data);
                  console.log(products);
                  dispatch(setProductAction(response.data));
                  // console.log(products);
                })
                .catch((error) => {
                  console.log(error.value);
                });
            } else {
              if (
                documentNumber == null &&
                agent == null &&
                user == null &&
                admNumber == null &&
                selectedAdmType != null
              ) {
                axios
                  .get(
                    "http://localhost:4000/Adms/AllAdmsFilterAdmType/" +
                      selectedAdmType["name"]
                  )
                  .then((response) => {
                    setProducts(response.data);
                    console.log(products);
                    dispatch(setProductAction(response.data));
                    // console.log(products);
                  })
                  .catch((error) => {
                    console.log(error.value);
                  });
              }

              //***************************************************************************************************************** */
              else {
                if (
                  documentNumber != null &&
                  agent != null &&
                  user == null &&
                  admNumber == null &&
                  selectedAdmType == null
                ) {
                  console.log("OKKKKKKK");

                  axios
                    .get(
                      "http://localhost:4000/Adms/AllAdms4/" +
                        documentNumber +
                        "/" +
                        agent["Agency Code"]
                    )
                    .then((response) => {
                      setProducts(response.data);

                      dispatch(setProductAction(response.data));
                      //  console.log(products);
                    })
                    .catch((error) => {
                      console.log(error.value);
                    });
                  //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
                } else {
                  if (
                    documentNumber != null &&
                    agent != null &&
                    user == null &&
                    admNumber != null &&
                    selectedAdmType == null
                  ) {
                    axios
                      .get(
                        "http://localhost:4000/Adms/AllAdms5/" +
                          documentNumber +
                          "/" +
                          agent["Agency Code"] +
                          "/" +
                          admNumber
                      )
                      .then((response) => {
                        setProducts(response.data);
                        console.log(products);
                        dispatch(setProductAction(response.data));
                        console.log(products);
                      })
                      .catch((error) => {
                        console.log(error.value);
                      });
                    //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
                  } else {
                    if (
                      documentNumber != null &&
                      agent != null &&
                      user == null &&
                      admNumber != null &&
                      selectedAdmType != null
                    ) {
                      axios
                        .get(
                          "http://localhost:4000/Adms/AllAdms6/" +
                            documentNumber +
                            "/" +
                            agent["Agency Code"] +
                            "/" +
                            admNumber +
                            "/" +
                            selectedAdmType["name"]
                        )
                        .then((response) => {
                          setProducts(response.data);
                          console.log(products);
                          dispatch(setProductAction(response.data));
                          console.log(products);
                        })
                        .catch((error) => {
                          console.log(error.value);
                        });
                      //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
                    } else {
                      if (
                        documentNumber != null &&
                        agent != null &&
                        user != null &&
                        admNumber != null &&
                        selectedAdmType != null
                      ) {
                        axios
                          .get(
                            "http://localhost:4000/Adms/AllAdms7/" +
                              documentNumber +
                              "/" +
                              agent["Agency Code"] +
                              "/" +
                              admNumber +
                              "/" +
                              selectedAdmType["name"] +
                              "/" +
                              user["username"]
                          )
                          .then((response) => {
                            setProducts(response.data);
                            console.log(products);
                            dispatch(setProductAction(response.data));
                            console.log(products);
                          })
                          .catch((error) => {
                            console.log(error.value);
                          });
                        //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
                      } else {
                        if (
                          documentNumber == null &&
                          agent != null &&
                          user == null &&
                          admNumber != null &&
                          selectedAdmType == null
                        ) {
                          axios
                            .get(
                              "http://localhost:4000/Adms/AllAdms1/" +
                                agent["Agency Code"] +
                                "/" +
                                admNumber
                            )
                            .then((response) => {
                              setProducts(response.data);
                              console.log(products);
                              dispatch(setProductAction(response.data));
                              console.log(products);
                            })
                            .catch((error) => {
                              console.log(error.value);
                            });
                          //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
                        } else {
                          if (
                            documentNumber == null &&
                            agent != null &&
                            user == null &&
                            admNumber != null &&
                            selectedAdmType != null
                          ) {
                            axios
                              .get(
                                "http://localhost:4000/Adms/AllAdms2/" +
                                  agent["Agency Code"] +
                                  "/" +
                                  admNumber +
                                  "/" +
                                  selectedAdmType["name"]
                              )
                              .then((response) => {
                                setProducts(response.data);
                                console.log(products);
                                dispatch(setProductAction(response.data));
                                console.log(products);
                              })
                              .catch((error) => {
                                console.log(error.value);
                              });
                            //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
                          } else {
                            if (
                              documentNumber == null &&
                              agent != null &&
                              user != null &&
                              admNumber != null &&
                              selectedAdmType != null
                            ) {
                              axios
                                .get(
                                  "http://localhost:4000/Adms/AllAdms3/" +
                                    agent["Agency Code"] +
                                    "/" +
                                    admNumber +
                                    "/" +
                                    selectedAdmType["name"] +
                                    "/" +
                                    user["username"]
                                )
                                .then((response) => {
                                  setProducts(response.data);
                                  console.log(products);
                                  dispatch(setProductAction(response.data));
                                  console.log(products);
                                })
                                .catch((error) => {
                                  console.log(error.value);
                                });
                              //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
                            } else {
                              if (
                                documentNumber == null &&
                                agent == null &&
                                user != null &&
                                admNumber == null &&
                                selectedAdmType != null
                              ) {
                                axios
                                  .get(
                                    "http://localhost:4000/Adms/AllAdms10/" +
                                      selectedAdmType["name"] +
                                      "/" +
                                      user["username"]
                                  )
                                  .then((response) => {
                                    setProducts(response.data);
                                    console.log(products);
                                    dispatch(setProductAction(response.data));
                                    console.log(products);
                                  })
                                  .catch((error) => {
                                    console.log(error.value);
                                  });
                                //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
                              } else {
                                if (
                                  documentNumber == null &&
                                  agent == null &&
                                  user == null &&
                                  admNumber != null &&
                                  selectedAdmType != null
                                ) {
                                  axios
                                    .get(
                                      "http://localhost:4000/Adms/AllAdms8/" +
                                        admNumber +
                                        "/" +
                                        selectedAdmType["name"]
                                    )
                                    .then((response) => {
                                      setProducts(response.data);
                                      console.log(products);
                                      dispatch(setProductAction(response.data));
                                      console.log(products);
                                    })
                                    .catch((error) => {
                                      console.log(error.value);
                                    });
                                  //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
                                } else {
                                  if (
                                    documentNumber == null &&
                                    agent == null &&
                                    user != null &&
                                    admNumber != null &&
                                    selectedAdmType != null
                                  ) {
                                    axios
                                      .get(
                                        "http://localhost:4000/Adms/AllAdms9/" +
                                          admNumber +
                                          "/" +
                                          selectedAdmType["name"] +
                                          "/" +
                                          user["username"]
                                      )
                                      .then((response) => {
                                        setProducts(response.data);
                                        console.log(products);
                                        dispatch(
                                          setProductAction(response.data)
                                        );
                                        console.log(products);
                                      })
                                      .catch((error) => {
                                        console.log(error.value);
                                      });
                                    //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
                                  } else {
                                    if (
                                      documentNumber != null &&
                                      agent != null &&
                                      user == null &&
                                      admNumber == null &&
                                      selectedAdmType != null
                                    ) {
                                      axios
                                        .get(
                                          "http://localhost:4000/Adms/AllAdms11/" +
                                            documentNumber +
                                            "/" +
                                            agent["Agency Code"] +
                                            "/" +
                                            selectedAdmType["name"]
                                        )
                                        .then((response) => {
                                          setProducts(response.data);
                                          console.log(products);
                                          dispatch(
                                            setProductAction(response.data)
                                          );
                                          console.log(products);
                                        })
                                        .catch((error) => {
                                          console.log(error.value);
                                        });
                                      //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
                                    } else {
                                      if (
                                        documentNumber != null &&
                                        agent != null &&
                                        user != null &&
                                        admNumber == null &&
                                        selectedAdmType != null
                                      ) {
                                        axios
                                          .get(
                                            "http://localhost:4000/Adms/AllAdms12/" +
                                              documentNumber +
                                              "/" +
                                              agent["Agency Code"] +
                                              "/" +
                                              user["username"]
                                          )
                                          .then((response) => {
                                            setProducts(response.data);
                                            console.log(products);
                                            dispatch(
                                              setProductAction(response.data)
                                            );
                                            console.log(products);
                                          })
                                          .catch((error) => {
                                            console.log(error.value);
                                          });
                                      } else {
                                        if (
                                          documentNumber == null &&
                                          agent != null &&
                                          user == null &&
                                          admNumber == null &&
                                          selectedAdmType != null
                                        ) {
                                          axios
                                            .get(
                                              "http://localhost:4000/Adms/AllAdms13/" +
                                                agent["Agency Code"] +
                                                "/" +
                                                selectedAdmType["name"]
                                            )
                                            .then((response) => {
                                              setProducts(response.data);
                                              console.log(products);
                                              dispatch(
                                                setProductAction(response.data)
                                              );
                                              console.log(products);
                                            })
                                            .catch((error) => {
                                              console.log(error.value);
                                            });
                                        } else {
                                          if (
                                            documentNumber == null &&
                                            agent != null &&
                                            user != null &&
                                            admNumber == null &&
                                            selectedAdmType == null
                                          ) {
                                            axios
                                              .get(
                                                "http://localhost:4000/Adms/AllAdms14/" +
                                                  agent["Agency Code"] +
                                                  "/" +
                                                  user["username"]
                                              )
                                              .then((response) => {
                                                setProducts(response.data);
                                                console.log(products);
                                                dispatch(
                                                  setProductAction(
                                                    response.data
                                                  )
                                                );
                                                console.log(products);
                                              })
                                              .catch((error) => {
                                                console.log(error.value);
                                              });
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  /*
  if (
    documentNumber !=  null &&
    agent !=  null &&
    user == null &&
    admNumber !=  null &&
    selectedAdmType == null
  ) {
    axios
      .get("http://localhost:4000/Adms/AllAdms/"+ documentNumber +"/" +  agent["Agency Code"] +"/"+ admNumber)
      .then((response) => {
        setProducts(response.data);
        console.log(products);
        dispatch(setProductAction(response.data));
        console.log(products);
      })
      .catch((error) => {
        console.log(error.value);
      });
    //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
  }
  if (
    documentNumber !=  null &&
    agent !=  null &&
    user == null &&
    admNumber !=  null &&
    selectedAdmType !=  null
  ) {
    axios
      .get("http://localhost:4000/Adms/AllAdms/"+ documentNumber +"/" +  agent["Agency Code"] +"/"+ admNumber +"/" +  selectedAdmType["name"])
      .then((response) => {
        setProducts(response.data);
        console.log(products);
        dispatch(setProductAction(response.data));
        console.log(products);
      })
      .catch((error) => {
        console.log(error.value);
      });
    //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
  }
  if (
    documentNumber !=  null &&
    agent !=  null &&
    user !=  null &&
    admNumber !=  null &&
    selectedAdmType !=  null
  ) {
    axios
      .get("http://localhost:4000/Adms/AllAdms/"+ documentNumber +"/" +  agent["Agency Code"]+"/" + admNumber +"/" +  selectedAdmType["name"] +"/" + user["username"])
      .then((response) => {
        setProducts(response.data);
        console.log(products);
        dispatch(setProductAction(response.data));
        console.log(products);
      })
      .catch((error) => {
        console.log(error.value);
      });
    //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
  }
  if (
    documentNumber == null &&
    agent !=  null &&
    user == null &&
    admNumber !=  null &&
    selectedAdmType == null
  ) {
    axios
      .get("http://localhost:4000/Adms/AllAdms/"+   agent["Agency Code"] + "/" +admNumber )
      .then((response) => {
        setProducts(response.data);
        console.log(products);
        dispatch(setProductAction(response.data));
        console.log(products);
      })
      .catch((error) => {
        console.log(error.value);
      });
    //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
  }
  if (
    documentNumber == null &&
    agent !=  null &&
    user == null &&
    admNumber !=  null &&
    selectedAdmType !=  null
  ) {
    axios
      .get("http://localhost:4000/Adms/AllAdms/"+  agent["Agency Code"]+"/" + admNumber +"/" +  selectedAdmType["name"] )
      .then((response) => {
        setProducts(response.data);
        console.log(products);
        dispatch(setProductAction(response.data));
        console.log(products);
      })
      .catch((error) => {
        console.log(error.value);
      });
    //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
  }
  if (
    documentNumber == null &&
    agent !=  null &&
    user !=  null &&
    admNumber !=  null &&
    selectedAdmType !=  null
  ) {
    axios
      .get("http://localhost:4000/Adms/AllAdms/"+   agent["Agency Code"]+"/" + admNumber +"/" +  selectedAdmType["name"] +"/" + user["username"])
      .then((response) => {
        setProducts(response.data);
        console.log(products);
        dispatch(setProductAction(response.data));
        console.log(products);
      })
      .catch((error) => {
        console.log(error.value);
      });
    //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
  }
  if (
    documentNumber == null &&
    agent == null &&
    user !=  null &&
    admNumber == null &&
    selectedAdmType !=  null
  ) {
    axios
      .get("http://localhost:4000/Adms/AllAdms/"+   selectedAdmType["name"] +"/" + user["username"])
      .then((response) => {
        setProducts(response.data);
        console.log(products);
        dispatch(setProductAction(response.data));
        console.log(products);
      })
      .catch((error) => {
        console.log(error.value);
      });
    //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
  }
  if (
    documentNumber == null &&
    agent == null &&
    user == null &&
    admNumber !=  null &&
    selectedAdmType !=  null
  ) {
    axios
      .get("http://localhost:4000/Adms/AllAdms/"+ admNumber +"/" +  selectedAdmType["name"] )
      .then((response) => {
        setProducts(response.data);
        console.log(products);
        dispatch(setProductAction(response.data));
        console.log(products);
      })
      .catch((error) => {
        console.log(error.value);
      });
    //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
  }
  if (
    documentNumber == null &&
    agent == null &&
    user !=  null &&
    admNumber !=  null &&
    selectedAdmType !=  null
  ) {
    axios
      .get("http://localhost:4000/Adms/AllAdms/"+   admNumber +"/" +  selectedAdmType["name"] +"/" + user["username"])
      .then((response) => {
        setProducts(response.data);
        console.log(products);
        dispatch(setProductAction(response.data));
        console.log(products);
      })
      .catch((error) => {
        console.log(error.value);
      });
    //const { products, error, loaded  } = useAxios("http://localhost:4000/Adms/AllAdms");
  }


*/

  //******************************************************************************************************************* */
  /* console.log("intersectionResulionResultintersectionResultintersectionResult");
  console.log(products);
  console.log("intersectionRectionResultintersectionResultintersectionResult");*/

  const navigateToCreateStep1 = () => {
    // 👇️ navigate to /contacts
    navigate("/CreateStep1");
  };

  const {
    data: agents,
    loading: loading1,
    error: error1,
  } = useFetch("http://localhost:4000/Agents/AllAgents");

  //const agents = [...data1];
  // setAgents(data);

  const onChangeMethod = (e) => {
    setAgent(e.value);
  };
  const reset = (e) => {
    setAgent(null);
    setDocumentNumber(null);
    setAdmNumber(null);
    admTypes = [{}];
    setUser(null);
  };

  const {
    data: users,
    loading: loading2,
    error: error2,
  } = useFetch("http://localhost:4000/Users/AllUsers");

  const onChangeMethodUsername = (e) => {
    setUser(e.value);
  };
  ////////////////////////////////////////////
  return (
    <div>
      <br />
      <Panel headerTemplate={template} toggleable className="ml-5 mr-5 ">
        <div className="flex flex-row  justify-content-space-between gap-5">
          <InputMask
            label="Document Number"
            mask="9999999999"
            val1={documentNumber}
            setVal1={(e) => setDocumentNumber(e.value)}
          />
          <DropDownClear
            label="Agent Code"
            placeholder="Select an Agent"
            autoCompleteValues={agents}
            selectedValue={agent}
            onChangeMethod={onChangeMethod}
            filterByProps="Agency Code"
            optionLabelProps="Agency Code"
          />
          <InputMask
            label="ADM Number"
            mask="9999999999"
            val1={admNumber}
            setVal1={(e) => setAdmNumber(e.target.value)}
          />
          <DropDownClear
            label="ADM Type"
            placeholder="Select ADM Type "
            autoCompleteValues={admTypes}
            selectedValue={selectedAdmType}
            onChangeMethod={(e) => setSelectedAdmType(e.target.value)}
            filterByProps="name"
            optionLabelProps="name"
          />
          <DropDownClear
            label="Username"
            placeholder="Select Username"
            autoCompleteValues={users}
            selectedValue={user}
            onChangeMethod={onChangeMethodUsername}
            filterByProps="username"
            optionLabelProps="username"
          />
        </div>
        <div className="flex flex-row  justify-content-space-between gap-3">
          <PrimeButton
            label="Search"
            icon="pi pi-search"
            searchFunction={SearchAdmFunction}
          />

          <PrimeButton
            label="Add ADM"
            icon="pi pi-plus"
            classname="p-button-success"
            searchFunction={navigateToCreateStep1}
          />

          <Link className="mt-3" onClick={reset}>
            Clear
          </Link>
        </div>
      </Panel>
    </div>
  );
};

export default PanelCard;
