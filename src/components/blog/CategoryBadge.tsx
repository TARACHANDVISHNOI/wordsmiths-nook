
import { Link } from 'react-router-dom';

type CategoryType = 'tech' | 'lifestyle' | 'travel' | 'health' | 'food';

interface CategoryBadgeProps {
  category: CategoryType;
}

const categoryLabels: Record<CategoryType, string> = {
  tech: 'Technology',
  lifestyle: 'Lifestyle',
  travel: 'Travel',
  health: 'Health',
  food: 'Food'
};

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  return (
    <Link to={`/categories/${category}`}>
      <span className={`category-badge category-badge-${category}`}>
        {categoryLabels[category]}
      </span>
    </Link>
  );
};

export default CategoryBadge;
