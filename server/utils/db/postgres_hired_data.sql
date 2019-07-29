--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.14
-- Dumped by pg_dump version 11.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: conversations; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.conversations (id, user_id_1, user_id_2) FROM stdin;
17	6	3
9	5	3
16	6	5
14	6	4
5	4	3
10	5	4
24	8	4
21	7	4
29	9	4
3	3	2
7	4	2
27	8	7
31	9	2
28	8	5
8	5	2
13	6	2
18	7	2
26	8	2
22	7	1
30	9	1
12	5	1
1	2	1
2	3	1
6	4	1
15	6	1
25	8	1
23	7	5
\.


--
-- Data for Name: dribbble; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.dribbble (id, user_id, feed_item_id, date_pulled) FROM stdin;
\.


--
-- Data for Name: dribbble_items; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.dribbble_items (id, user_id, date_pulled, token) FROM stdin;
\.


--
-- Data for Name: feed_items; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.feed_items (id, user_id, title, content, likes, location, direct_link, date_created) FROM stdin;
\.


--
-- Data for Name: skills; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.skills (id, value, label) FROM stdin;
\.


--
-- Data for Name: feed_items_tags; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.feed_items_tags (feed_item_id, tag_id) FROM stdin;
\.


--
-- Data for Name: feedback; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.feedback (id, user_id, issue_type, issue_content) FROM stdin;
\.


--
-- Data for Name: github; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.github (id, user_id, feed_item_id, date_pulled) FROM stdin;
\.


--
-- Data for Name: mentors; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.mentors (id, user_id, status, disabled) FROM stdin;
1	1	t	\N
2	4	t	\N
\.


--
-- Data for Name: messages; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.messages (id, conversation_id, content, date_created, from_user) FROM stdin;
1	1	hey	2019-07-16 13:43:37.473097	2
2	2	hey	2019-07-16 14:06:05.918001	3
3	1	hello	2019-07-16 17:06:59.052065	3
4	3	hello 	2019-07-16 17:07:15.334112	3
5	2	hello, this is a longer text message, but I'm just trying something out cus I want to see how good this would look and stuff you know	2019-07-24 20:35:49.073072	3
6	2	no way 	2019-07-24 20:49:02.146934	3
7	2	yeah way 	2019-07-25 14:35:14.394881	1
8	2	we're talking a lot aren't we	2019-07-27 14:11:46.448052	3
9	31	hey how are you omg this is really cool were totally talking to each other right now	2019-07-28 21:01:41.44775	9
\.


--
-- Data for Name: portfolio; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.portfolio (id, user_id, title, description, type, custom_link, api_link, thumbnail) FROM stdin;
\.


--
-- Data for Name: programs; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.programs (id, name) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.users (id, fullname, email, password, role, campus, location, current_job, avatar, date_created, study_year, study_cohort, github_access_token, github_api_code, dribbble_access_token, dribbble_api_code, dribbble_connected, description, programs, job_location, current_conversation_id) FROM stdin;
4	user4	user4@hotmail.ca	$2b$12$fNnGo60D/19iB6U0yKg8H.jzp.vlKR3oAQNUVJsX3uKz9qeihZSyC	ALUMNI	TOR	Wayne Towers	app developer	\N	2019-07-27 18:02:20.578856	2015	Q2	\N	\N	\N	\N	\N	\N	WEB	rogers	14
5	user5	user5@homtail.ca	$2b$12$rglqSuxQbiGZJJy/DtKwbuDsEv55RzpcTw2iDmd9ccy8vIrukCCrK	\N	\N	\N	\N	\N	2019-07-28 18:34:49.635519	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	16
3	user3	user3@cool.com	$2b$12$m2LQjNXYwnTZKXfql66Nb.H4OUheGewIaUc9E/z5mWsxbeBKphnja	STUDENT	TOR	vancouver	app developer	\N	2019-07-16 13:59:09.010325	2014	Q2	\N	\N	\N	\N	\N	\N	UI	Rangle.io	2
1	user1	user1@hotmail.ca	$2b$12$DCl99TG3c6szNo0p.vVPZeWYl4qmV8rthpL/d846gziWC.oPVmyiW	ALUMNI	TOR	vancouver	app developer	\N	2019-07-16 13:21:38.940956	2014	Q2	\N	\N	\N	\N	\N	\N	APP	Rangle.io	6
6	user6	user6@gmail.com	$2b$12$m6cHqipa/opvB.U/r5DGD.vFk.Deub/pXsfbo5.xXeoltZHqZ8bfK	\N	\N	\N	\N	\N	2019-07-28 19:10:55.545755	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
7	user7	user7@gmail.com	$2b$12$Qog0seifVTJKVdZWC74tFegTHxrOaiP2zHu98vc/M1rHEG1aU9NcO	\N	\N	\N	\N	\N	2019-07-28 19:46:02.526421	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
8	user8	user8@gmail.com	$2b$12$gxq3cEfV6NYuoHGcX4HObOVl./JgztQYW71UcRVKFjFQv/55rP2rm	\N	\N	\N	\N	\N	2019-07-28 19:52:21.918691	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
9	user9	user9@gmail.com	$2b$12$QKaZ7Ov/oTlVGtwRUxFRIu6YYmOhLtjMQShtjQELXrnQ2vMYGquJi	\N	\N	\N	\N	\N	2019-07-28 20:47:42.577908	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
2	user2	user2@gmail.com	$2b$12$i1Sk.vBn1me3Gg67pX6uXua6Hg/OanajZ2nEj/ZvyFOduUPJgUDVm	STUDENT	TOR	vancouver	web dev	\N	2019-07-16 13:24:01.856357	2019	Q3	\N	\N	\N	\N	\N	\N	WEB	red academy	1
\.


--
-- Data for Name: program_users; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.program_users (user_id, program_id) FROM stdin;
\.


--
-- Data for Name: skills_users; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.skills_users (user_id, skills_id) FROM stdin;
\.


--
-- Data for Name: users_conversation; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.users_conversation (user_id, conversation_id) FROM stdin;
\.


--
-- Data for Name: users_tags; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.users_tags (user_id, tag_id) FROM stdin;
\.


--
-- Name: conversations_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.conversations_id_seq', 31, true);


--
-- Name: dribbble_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.dribbble_id_seq', 1, false);


--
-- Name: feed_items_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.feed_items_id_seq', 1, false);


--
-- Name: feedback_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.feedback_id_seq', 1, false);


--
-- Name: github_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.github_id_seq', 1, false);


--
-- Name: linkedin_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.linkedin_id_seq', 1, false);


--
-- Name: mentors_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.mentors_id_seq', 2, true);


--
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.messages_id_seq', 9, true);


--
-- Name: portfolio_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.portfolio_id_seq', 1, false);


--
-- Name: programs_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.programs_id_seq', 1, false);


--
-- Name: skills_users_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.skills_users_id_seq', 1, false);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.tags_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.users_id_seq', 9, true);


--
-- PostgreSQL database dump complete
--

