import { Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";
import { onValue, ref, remove } from "firebase/database";
import Image from "next/image";
import Link from "next/link";
import { Fragment, memo, useCallback, useEffect, useState } from "react";
import Moment from "react-moment";
import { database } from "../../firebase";
import { notificationTypes } from "../../state";
import { GetState } from "../../state/stateProvider";
import { blurBase64 } from "../../util";

interface notificationInterface {
    text: string;
    type: notificationTypes;
}

const Notification = () => {
    const { uid, dispatch } = GetState();
    const [state, setState] = useState<any[]>([]);

    useEffect(() => {
        uid &&
            onValue(ref(database, `users/${uid}/notifications`), (snapshot) => {
                const data = snapshot.val();
                setState(data);
            });
    }, [dispatch, uid]);
    const read = useCallback(
        (v) => {
            uid && remove(ref(database, `users/${uid}/notifications/${v}`));
        },
        [uid]
    );

    return (
        <Menu as="div" className="relative ml-3">
            <div>
                <Menu.Button className="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                </Menu.Button>
                {state && Object?.keys(state) && (
                    <sub className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-gray-100 bg-pink-500 rounded-full animate-bounce">
                        {Object?.keys(state)?.length}
                    </sub>
                )}
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 py-1 mt-2 overflow-y-scroll origin-top-right bg-white rounded-md shadow-lg max-h-96 w-72 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {state ? (
                        Object?.keys(state) &&
                        Object?.keys(state)
                            ?.reverse()
                            ?.map((v: any) => (
                                <Menu.Item key={v}>
                                    {({ active }) => (
                                        <div>
                                            <Link
                                                href={state[v]?.postLink}
                                                passHref
                                            >
                                                <a
                                                    onClick={() => read(v)}
                                                    className={`
                                            ${active ? "bg-gray-100" : ""}
                                            p-2 text-sm text-gray-700 flex items-center justify-between
                                            `}
                                                >
                                                    <div className="flex truncate">
                                                        <div className="flex">
                                                            <h4 className="flex items-center justify-center space-x-2 font-semibold">
                                                                <div className="overflow-hidden border border-gray-500 rounded-full">
                                                                    <div className="relative flex items-center justify-center h-7 w-7">
                                                                        <Image
                                                                            className="object-cover object-center "
                                                                            src={
                                                                                state[
                                                                                    v
                                                                                ]
                                                                                    ?.profilePic ||
                                                                                "/userIcon.png"
                                                                            }
                                                                            alt={`${state[v]?.text}`}
                                                                            layout="fill"
                                                                            placeholder="blur"
                                                                            blurDataURL={
                                                                                blurBase64
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col wrap">
                                                                    <span>
                                                                        {
                                                                            state[
                                                                                v
                                                                            ]
                                                                                ?.text
                                                                        }
                                                                    </span>
                                                                    <time className="text-xs font-light">
                                                                        <Moment
                                                                            fromNow
                                                                        >
                                                                            {
                                                                                state[
                                                                                    v
                                                                                ]
                                                                                    ?.createdAt
                                                                            }
                                                                        </Moment>
                                                                    </time>
                                                                </div>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    )}
                                </Menu.Item>
                            ))
                    ) : (
                        <p className="flex items-center justify-center p-8 text-sm font-semibold text-gray-500">
                            No Notifications
                        </p>
                    )}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default memo(Notification);
