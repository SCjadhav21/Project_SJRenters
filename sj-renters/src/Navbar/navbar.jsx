import {
    Show,
    MenuButton,
    Menu,
    IconButton,
    MenuList,
    Select,
    Popover,
    PopoverTrigger,
    MenuItem,
    Flex,
    Box,
    Portal,
    Button,
    Input,
    PopoverCloseButton,
    PopoverBody,
    PopoverContent,
    PopoverArrow,
    Spacer,
    Text,
    Img
  } from "@chakra-ui/react";
  import { useContext } from "react";
  import { AuthContext } from "../Context/AuthContext";
  
  import { Link } from "react-router-dom";
  import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
  import React from "react";
  import logo from "../Images/sjfinal.png";
  export function Navbar() {
    const { isAuth, toggleAuth } = useContext(AuthContext);
    const [data, setData] = React.useState(0);
  
    React.useEffect(() => {
      fetch("https://pacific-refuge-88537.herokuapp.com/api/singleProduct")
        .then((res) => res.json())
        .then((res) => setData(res.length))
        .catch((err) => console.log(err));
    }, []);
  
    const handelChange = (e) => {
      fetch(
        `https://pacific-refuge-88537.herokuapp.com/api/clothing?search=${e.target.value}`
      )
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };
    function toggleState() {
      toggleAuth();
  
      return;
    }
  
    return (
      <>
        <Show above="md">
          <Box w="100%" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px">
            <Flex bg="#fff" color="balck" p="10px">
              <Box display="flex" margin="10px">
                <Link to="/">
                  <Img w="70px" src={logo} />
                </Link>
                <Text
                  margin="10px"
                  fontSize="20px"
                  color="#6D6D6D"
                  fontWeight="bold"
                  fontFamily=""
                >
                  SJ RENTERS
                </Text>
              </Box>
              <Spacer />
              <Box>
                <Input
                  onChange={handelChange}
                  placeholder="Search For Products"
                  margin="10px"
                  size="md"
                  color="#313131"
                  borderColor="#3182CE"
                  borderRadius="10px"
                  height="40px"
                  padding="0 18px"
                  paddingRight="50px"
                />
              </Box>
              <Spacer />
              <Box fontSize="11px" m="10px" w="30%">
                <Flex justifyContent="flex-end">
                  {" "}
                  <Box display="flex" margin="10px">
                    <Img
                      fontSize="25px"
                      width="25px"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMsq2lipdJDei07_jKRH5v4WlTzgQ2YuSEQdoZj4BaWzf1NBmOkss3pbScJairRJuk8E0&usqp=CAU"
                    ></Img>
                    <Text fontSize="20px">
                      <Link to="/cart">CART({data})</Link>
                    </Text>
                  </Box>
                  <Spacer />
                  <Box margin="10px">
                    {isAuth ? (
                      <Button
                        padding="0 16px"
                        bg="#FF1616"
                        color="#fff"
                        borderRadius="10px"
                        margin="-10px"
                        onClick={() => {
                          toggleState();
                        }}
                      >
                        LOGOUT
                      </Button>
                    ) : (
                      <Button
                        marginLeft="10px"
                        padding=" 16px"
                        bg="#FF1616"
                        color="#fff"
                        borderRadius="10px"
                      >
                        <Link to="/login">LOGIN/SIGNUP</Link>
                      </Button>
                    )}
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Show>
        <Show below="md">
          <Box position="fixed" w="100%" bg="white">
            <Flex p="10px">
              <Box>
                <Menu>
                  <MenuButton
                    margin="10px"
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                  />
                  <MenuList>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
  
                    <MenuItem>
                      <Link to="/login">LOGIN</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/cart">Cart({data})</Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
  
                <Popover>
                  <PopoverTrigger>
                    <IconButton
                      margin="10px"
                      fontSize="18px"
                      variant="outline"
                      aria-label="Search database"
                      size="md"
                      icon={<SearchIcon />}
                    />
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
  
                      <PopoverCloseButton
                        margin="5px"
                        // fontSize="18px"
                        variant="outline"
                      />
                      <PopoverBody>
                        <Flex>
                          <Input
                            placeholder="SEARCH HERE"
                            margin="10px"
                            size="md"
                          />
                          <IconButton
                            margin="10px"
                            fontSize="18px"
                            variant="outline"
                            aria-label="Search database"
                            size="md"
                            icon={<SearchIcon />}
                          />
                        </Flex>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
              </Box>
              <Spacer />
              <Box display="flex">
                <Link to="/">
                  <Img w="70px" src={logo} />
                </Link>
                <Text
                  margin="10px"
                  fontSize="20px"
                  color="#6D6D6D"
                  fontWeight="bold"
                  fontFamily=""
                >
                  SJ RENTERS
                </Text>
              </Box>
              <Spacer />
              <Box>
                <Button margin="10px" padding="0px">
                  <Link to="/login">
                    <Img
                      fontSize="18px"
                      size="md"
                      width="25px"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8KGl_KSisz6hjoKP5iBpmUJmOVnqglWkCCCunX-b10HJ-HaLtnhZKukedAzDRvpNH4bc&usqp=CAU"
                    ></Img>
                  </Link>
                </Button>
                <Button margin="10px" padding="0px">
                  <Link to="/cart">
                    <Img
                      fontSize="18px"
                      size="md"
                      width="25px"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMsq2lipdJDei07_jKRH5v4WlTzgQ2YuSEQdoZj4BaWzf1NBmOkss3pbScJairRJuk8E0&usqp=CAU"
                    ></Img>
                  </Link>
                  {data}
                </Button>
              </Box>
            </Flex>
          </Box>
        </Show>
      </>
    );
  }
  