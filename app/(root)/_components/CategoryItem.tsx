import { Card, CardContent } from "@/components/ui/card";
import { ICategory } from "@/types";
import Link from "next/link";

function CategoryItem(category: ICategory) {
  return (
    <Link href={`/category/${category.slug}`}>
      <Card>
        <CardContent>
          <h3 className="text-center mt-4">{category.name}</h3>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CategoryItem;
