import m from "mithril";
import "tachyons";

import Negative_0_4 from "../assets/NEGATIVE-0-4.JPG";
import uptwLogo from '../assets/uptw.png';

import "../assets/css/intro.css"


const IntroMithril = {
    view: (vnode) => {
        return m("div.absolute.[id=container]", {  // container
        }, m("main", [
            m("section[id=hero]", {  // hero
            }, [
                m("img[width=115]", {
                    src: uptwLogo.src,
                }),
                m("h1",
                  m("code",
                    m("pre.section", m("a.button", {
                        target: "_",
                        href: "https://www.instagram.com/ftw.up.13/",
                    }, "IG: ftW.uP.13 | 籃球顧問"))
                   )
                 ),

            ]),
        ]));
    },
};

const FullPageImage = {
    view: (vnode) => {
        return [
            m("img.db.vh-100.w-100.bg-center.cover", {
                src: vnode.attrs.image.src,
                style: "object-fit: contain;",
            }),
        ];
    },
};


const HeyNav = {
    view: (vnode) => {
        return m("div.absolute.z-1.w-100.tr.pa3", [
            m("nav", vnode.attrs.settings.nav.map((item) => (
                m("a.bs-btn", {
                    class: "bs-btn !bg-transparent before:translate-y-full hover:before:translate-y-0",
                    href: item.link,
                }, item.title)
            ))),
        ]);
    },
};


export default IntroMithril;
export {FullPageImage, HeyNav, IntroMithril};
