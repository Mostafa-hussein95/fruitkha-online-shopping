import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import Header from "./../Components/Header";
import newsimg1 from "../assets/news-bg-1.jpg"
import newsimg2 from "../assets/news-bg-2.jpg"
import newsimg3 from "../assets/news-bg-3.jpg"
import newsimg4 from "../assets/news-bg-4.jpg"
import newsimg5 from "../assets/news-bg-5.jpg"
import newsimg6 from "../assets/news-bg-6.jpg"
import avatar1 from "../assets/avatar1.png"
import avatar2 from "../assets/avatar2.png"
import avatar3 from "../assets/avatar3.png"


export default function SingleNews() {
  const { id } = useParams();
  const [newsDetails, setNewsDetails] = useState(null);

  const newsImgs = [
    {
            imgSrc: `${newsimg1}`,
            id: "1",
            title: "You will vainly look for fruit on it in autumn.",
            detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sintsoluta, similique quidem fuga vel voluptates amet doloremquecorrupti. Perferendis totam voluptates eius error fugacupiditate dolorum? Adipisci mollitia quod labore aut natusnobis. Rerum perferendis, nobis hic adipisci vel inventorefacilis rem illo, tenetur ipsa voluptate dolorem, cupiditatetemporibus laudantium quidem recusandae expedita dicta cumeum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpafugiat minus laborum quia nam!"
                    },
          {
            imgSrc: `${newsimg2}`,
            id: "2",
            title: "A mans worth has its season, like tomato.",
            detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sintsoluta, similique quidem fuga vel voluptates amet doloremquecorrupti. Perferendis totam voluptates eius error fugacupiditate dolorum? Adipisci mollitia quod labore aut natusnobis. Rerum perferendis, nobis hic adipisci vel inventorefacilis rem illo, tenetur ipsa voluptate dolorem, cupiditatetemporibus laudantium quidem recusandae expedita dicta cumeum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpafugiat minus laborum quia nam!"
                    },
          {
            imgSrc: `${newsimg3}`,
            id: "3",
            title: "Good thoughts bear good fresh juicy fruit.",
            detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sintsoluta, similique quidem fuga vel voluptates amet doloremquecorrupti. Perferendis totam voluptates eius error fugacupiditate dolorum? Adipisci mollitia quod labore aut natusnobis. Rerum perferendis, nobis hic adipisci vel inventorefacilis rem illo, tenetur ipsa voluptate dolorem, cupiditatetemporibus laudantium quidem recusandae expedita dicta cumeum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpafugiat minus laborum quia nam!"
                    },
          {
            imgSrc: `${newsimg4}`,
            id: "4",
            title: "You will vainly look for fruit on it in autumn.",
            detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sintsoluta, similique quidem fuga vel voluptates amet doloremquecorrupti. Perferendis totam voluptates eius error fugacupiditate dolorum? Adipisci mollitia quod labore aut natusnobis. Rerum perferendis, nobis hic adipisci vel inventorefacilis rem illo, tenetur ipsa voluptate dolorem, cupiditatetemporibus laudantium quidem recusandae expedita dicta cumeum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpafugiat minus laborum quia nam!"
                    },
          {
            imgSrc: `${newsimg5}`,
            id: "5",
            title: "A mans worth has its season, like tomato.",
            detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sintsoluta, similique quidem fuga vel voluptates amet doloremquecorrupti. Perferendis totam voluptates eius error fugacupiditate dolorum? Adipisci mollitia quod labore aut natusnobis. Rerum perferendis, nobis hic adipisci vel inventorefacilis rem illo, tenetur ipsa voluptate dolorem, cupiditatetemporibus laudantium quidem recusandae expedita dicta cumeum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpafugiat minus laborum quia nam!"
                    },
          {
            imgSrc: `${newsimg6}`,
            id: "6",
            title: "Good thoughts bear good fresh juicy fruit.",
            detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sintsoluta, similique quidem fuga vel voluptates amet doloremquecorrupti. Perferendis totam voluptates eius error fugacupiditate dolorum? Adipisci mollitia quod labore aut natusnobis. Rerum perferendis, nobis hic adipisci vel inventorefacilis rem illo, tenetur ipsa voluptate dolorem, cupiditatetemporibus laudantium quidem recusandae expedita dicta cumeum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpafugiat minus laborum quia nam!"
                    },
  ];

  useEffect(() => {
    const foundArticle = newsImgs.find((news) => news.id === id);
    setNewsDetails(foundArticle);
  }, [id]);

  return (
    <>
      <Header
        title="Read the Details"
        pageHdr="Single Article"
        fruitBtn={false}
        contactBtn={false}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* المحتوى الرئيسي */}
          <main className="lg:col-span-3">
            {newsDetails ? (
              <article className="bg-white rounded-xl shadow-lg p-6">
                {/* صورة المقال */}
                <img
                  src={newsDetails.imgSrc}
                  alt={newsDetails.title}
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />

                {/* معلومات المقال */}
                <div className="flex items-center gap-4 mt-6 text-gray-600">
                  <span className="flex items-center gap-1">
                    <i className="fa-solid fa-user-tie text-[#F28123]" />
                    Admin
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fa-solid fa-calendar text-[#F28123]" />
                    2 Feb 2025
                  </span>
                </div>

                {/* محتوى المقال */}
                <div className="max-w-none mt-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-6">
                    {newsDetails.title}
                  </h1>
                  {[...Array(2)].map((_, i) => (
                    <p key={i} className="text-gray-700 mb-4">
                      {newsDetails.detail}
                    </p>
                  ))}
                </div>

                {/* التعليقات */}
                <section className="mt-12">
                  <h2 className="text-2xl text-start font-bold text-gray-900 mb-8">
                    3 Comments
                  </h2>
                  
                  <div className="space-y-8">
                    {[{imgSrc:`${avatar1}` ,id:1}, {imgSrc:`${avatar2}` ,id:2}, {imgSrc:`${avatar3}`,id:3}].map((comment) => (
                      <div key={comment} className="flex gap-4">
                        <img
                          src={`${comment.imgSrc}`}
                          alt={`Commenter ${comment.id}`}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">User {comment.id}</h3>
                            <span className="text-gray-500 text-sm">
                              Apr 26, 2020
                            </span>
                            <Link
                              to="#"
                              className="text-[#F28123] text-sm ml-auto hover:underline"
                            >
                              Reply
                            </Link>
                          </div>
                          <p className="text-gray-600">
                            Nunc risus ex, tempus quis purus ac, tempor consequat
                            ex. Vivamus sem magna, maximus at est id.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* نموذج التعليق */}
                <form className="mt-12 space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Leave a Comment
                  </h2>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F28123]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F28123]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F28123]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#F28123] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#051922] transition-colors"
                  >
                    Post Comment
                  </button>
                </form>
              </article>
            ) : (
              <p className="text-center text-xl text-gray-600">Article not found</p>
            )}
          </main>

          {/* الشريط الجانبي */}
          <aside className="space-y-8">
            {/* المشاركات الأخيرة */}
            <section className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-start text-gray-900 mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-3">
                {newsImgs.slice(0, 5).map((post) => (
                  <li key={post.id}>
                    <Link
                      to={`/singlenews/${post.id}`}
                      className="flex items-baseline gap-2 text-gray-600 hover:text-[#F28123]"
                    >
                      <i className="fa-solid fa-angle-right text-sm" />
                      <span>{post.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* الأرشيف */}
            <section className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl text-start font-bold text-gray-900 mb-4">
                Archive Posts
              </h3>
              <ul className="space-y-3">
                {['JAN 2019 (5)', 'FEB 2019 (3)', 'MAY 2019 (4)'].map((item) => (
                  <li key={item}>
                    <Link
                      to="#"
                      className="flex items-center gap-2 text-gray-600 hover:text-[#F28123]"
                    >
                      <i className="fa-solid fa-angle-right text-sm" />
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* الوسوم */}
            <section className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-start text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Apple', 'Strawberry', 'Berry', 'Orange'].map((tag) => (
                  <Link
                    key={tag}
                    to="#"
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-[#F28123] hover:text-white"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </>
  );
}