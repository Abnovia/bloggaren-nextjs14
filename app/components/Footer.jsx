const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <p>Copyright &copy; Bloggaren {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
