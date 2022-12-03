import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  categories: { [key: string]: string };
  onClick: (id?: string) => void;
}

const Menu: FC<Props> = ({ categories, onClick }) => {
  return (
    <>
      <h4>Menu</h4>
      <div className="row">
        <Link to={`/`} className="col-12 text-dark">
          All
        </Link>
        {Object.keys(categories).map((key) => (
          <Link to={`/quotes/${key}`} key={key} className="col-12 text-dark">
            {categories[key]}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Menu;