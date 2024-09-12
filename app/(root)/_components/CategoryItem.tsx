import { Card, CardContent } from "@/components/ui/card";
import { ICategory } from "@/types";
import Link from "next/link";

function CategoryItem(category: ICategory) {
  return (
    <Link
      href={`/category/${category.slug}`}
      aria-label={`Go to ${category.name} category`}
    >
      <Card>
        <CardContent>
          <h3
            className="text-center mt-4"
            tabIndex={0}
            aria-label={`category title : ${category.name}`}
          >
            {category.name}
          </h3>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CategoryItem;
