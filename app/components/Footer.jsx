const Footer = () => {
  const today = new Date();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 mt-auto py-4 px-4 text-center border-t border-gray-200 dark:border-gray-700">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Copyright &copy; Bloggaren 2023 - {today.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
