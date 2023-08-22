import Link from 'next/link';
import { Category } from '../card/Card';

interface DropdownItemProps {
    category: Category;
}
const DropdownItem = (props: DropdownItemProps) => {
    const { category } = props;
    return (
        <span className="p-5 rounded-md text-gray-500 hover:bg-gray-100 hover:underline cursor-pointer hover:text-green-500 duration-300 ease-in-out transition-all px-2 py-3">
            {category.name}
        </span>
    );
};
export default DropdownItem;
