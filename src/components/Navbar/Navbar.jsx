import { Flex, Input, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar({ curUser }) {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="#fff"
      padding="30px 7%"
      className={styles.navbar}
      color="#000"
    >
      <Flex>
        <Image
          src="https://www.pinclipart.com/picdir/big/62-626990_aaca-information-for-austin-tx-food-allergies-eat.png"
          alt="Logo"
          w="50px"
        />
      </Flex>

      <Flex>
        <Input placeholder="Search recepies here" backgroundColor="#fff" />
      </Flex>

      <Flex justifyContent="space-between" gap="30px">
        <NavLink to={`/${curUser}`} className={styles.navlink}>
          Home
        </NavLink>
        <NavLink to="plan" className={styles.navlink}>
          Plan
        </NavLink>
        <NavLink to="list" className={styles.navlink}>
          List
        </NavLink>
        <NavLink to="contact" className={styles.navlink}>
          Contact
        </NavLink>
        <NavLink to="about" className={styles.navlink}>
          About
        </NavLink>
        <NavLink to="profile" className={styles.navlink}>
          Profile
        </NavLink>
      </Flex>
    </Flex>
  );
}
