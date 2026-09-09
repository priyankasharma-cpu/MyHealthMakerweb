import { useState } from "react";
import categories from "../../data/categories";
import "./category-sidebar.css";

const CategorySidebar = ({ selectedCategory = "all", onCategoryChange }) => {
    const [activeCategory, setActiveCategory] = useState(selectedCategory);

    const handleCategoryClick = (category) => {
        setActiveCategory(category.slug);

        // Update URL without reloading the page
        if (category.slug === "all") {
            window.history.pushState({}, "", "/");
        } else {
            window.history.pushState(
                {},
                "",
                `/category/${category.slug}`
            );
        }

        // Send selected category to parent
        if (onCategoryChange) {
            onCategoryChange(category);
        }
    };

    return (
        <aside className="category-sidebar">
            <div className="category-sidebar__header">
                <h2>Browse Categories</h2>
            </div>

            <div className="category-sidebar__list">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        type="button"
                        className={`category-sidebar__item ${activeCategory === category.slug
                                ? "category-sidebar__item--active"
                                : ""
                            }`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        <span>{category.name}</span>

                        {activeCategory === category.slug && (
                            <span className="category-sidebar__arrow">→</span>
                        )}
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default CategorySidebar;