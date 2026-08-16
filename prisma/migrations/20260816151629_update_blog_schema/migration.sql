/*
  Warnings:

  - You are about to drop the column `image2` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `video` on the `Blog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "image2",
DROP COLUMN "video",
ADD COLUMN     "authorImage" TEXT,
ADD COLUMN     "authorLink" TEXT,
ADD COLUMN     "authorRole" TEXT;

-- AlterTable
ALTER TABLE "BlogList" ADD COLUMN     "sectionId" INTEGER;

-- AlterTable
ALTER TABLE "BlogSection" ADD COLUMN     "image" TEXT,
ADD COLUMN     "video" TEXT,
ALTER COLUMN "heading" DROP NOT NULL,
ALTER COLUMN "paragraph" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "BlogList" ADD CONSTRAINT "BlogList_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "BlogSection"("id") ON DELETE SET NULL ON UPDATE CASCADE;
