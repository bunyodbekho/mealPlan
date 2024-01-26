import styles from "./LoginPage.module.scss";
import { useForm } from "react-hook-form";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Input state
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (data) => {
    setUserName(data.username);
    setPassword(data.password);
  };

  // Api request state
  const [fetchError, setFerchError] = useState(null);
  const [usrData, setUsrData] = useState({});

  useEffect(
    function () {
      const fetchAlData = async (userName) => {
        let { data: user, error } = await supabase
          .from("users")
          .select("username, password")
          .eq("username", `${userName}`);

        if (error) {
          setFerchError("Could not fetch the algorithms data");
          setUsrData([]);
        }
        if (user) {
          setUsrData(user);
          setFerchError(null);
        }
      };
      fetchAlData(userName);
    },
    [userName]
  );

  return (
    <div className={styles.loginpage}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className={styles.formelement}>
          <label>Username:</label>
          <Input
            {...register("username")}
            focusBorderColor="#38a169"
            placeholder="Enter username"
          />
        </div>

        <div className={styles.formelement}>
          <label>Password:</label>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              {...register("password")}
              focusBorderColor="#38a169"
              color="#000"
            />
            <InputRightElement width="4.5rem" color="#000">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleClick}
                colorScheme="green"
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>

        <Button type="submit" colorScheme="green">
          Check
        </Button>
        {password === usrData[0]?.password && (
          <Link to={`/${userName}`}>
            <Button type="submit" colorScheme="green">
              Login
            </Button>
          </Link>
        )}
      </form>
    </div>
  );
}
