---
layout: default
title: Rules
permalink: /rules/
---

## Schedule

There will be two contest days. On each day contestants will be given three tasks to complete in 5 hours.

- Contest Day 1: TBD
- Contest Day 2: TBD

There will be an online Practice Contest prior to Contest Day 1, to familiarise all contestants with the grading system and task types.

## Grading System

Grading and evaluation will take place on [TLX](https://tlx.toki.id/). Each contestant will be assigned an account on TLX. Due to differences in software configurations, it is not guaranteed that contestant workstations and grading workstations will have an identical execution environment.

## Contestant Workstations

Each contestant will be assigned a workstation. Contestants can expect the following software on the workstation:
- Operating System: Ubuntu 22.04 LTS
- Text Editors and IDEs: Geany, Visual Studio Code, command line vim and nano
- Internet Browsers: Firefox
- Compilers: g++ 11.4.0
    - C++17 source code can be compiled, including from multiple source files.
- Interpreters: Python 3.10.6
- Documentations: C++ reference

## Tasks

Each task is either a programming task or an output-only task.

- In each programming task:
    - Each submitted solution must be written in C++17.
    - Submissions must not perform explicit input and output operations; instead, data must only be exchanged through the interfaces specified in the task statement. In particular, direct access to any file, including standard input or standard output, is forbidden (however, writing to standard error is allowed).
    - Time and memory limits are specified at the top of the task description.
- In each output-only task:
    - Each submission is a set of output files.

Contestants may perform at most 50 submissions for each task. Contestants may submit as often as they wish (i.e. there is no submission delay).

The scores for each task will be calculated as follows:

- Each subtask consists of some number of test cases. Unless specified otherwise, in each programming task the submission is executed once per test case.
- For each submission, the score for each test case is calculated based on the program execution and/or the output.
- The program execution on each test case is subject to time and memory limits, which are given in the grading system. If the program exceeds these limits, it receives 0 points for this test case.
- Each task is divided into some number of subtasks, each worth a portion of the total points. The total points for each task is 100 points.
- For each submission, the score for each subtask is the minimum of the scores for the test cases in the subtask.
- The final score for each subtask is the maximum of the scores for this subtask across all submissions.
- The final score for each task is the sum of the scores for its subtasks. Note that subtask stitching is enabled in TLX.
    - For example, consider a contestant who made two submissions on a task that contains two subtasks. If the first submitted solution got 30 points for the first subtask and 10 points for the second subtask, and the second solution got 0 points for the first subtask and 40 points for the second subtask, then the final score for this task will be 70.

## Supplies

On the competition days, contestants may not bring anything into the competition rooms, except for the following items under the proviso that they cannot transmit or store any data in electronic or printed or other written format (other than the purpose for which they have been designed):

- clothing,
- writing utensils,
- USB keyboards and mice (with no wireless communication and no programmable functions whose configuration is retained when unplugged),
- mouse pads,
- small mascots,
- snacks,
- medicine and medical equipment,
- earplugs and earmuffs.

Contestants must declare and receive prior approval for their usage of USB keyboards and mice from the invigilators onsite.

Any attempts to bring any other items unlisted above into the contest room are considered cheating. In particular, the following items are strictly prohibited:

- any computing equipment (e.g. calculators, laptops, tablets),
- any keyboards or mice, with wireless communication or programmable functions whose configuration is retained when unplugged,
- any books, manuals, written or printed materials,
- any data storage medium (e.g., CD-ROMs, USB drives, flash cards, micro-drives),
- any communication devices (e.g., mobile phones, radios of any sort, Bluetooth-enabled devices),
- watches of any type,
- any earphones, headphones, microphones and speakers.

## Clarification Requests

During the competition, contestants may ask questions concerning competition tasks, rules and/or grading via the grading system. Questions regarding the competition tasks should be phrased, so that a yes/no answer will have a clear meaning. Questions regarding the competition tasks will be answered with one of the following:

- “Yes”
- “No”
- “No comment/Please refer to task statement”
- “Invalid question (not a Yes/No question)” — The question is most likely not phrased so that a yes/no answer would be meaningful. The contestant is encouraged to rephrase the question.

## Cheating

Violating any of the following rules is considered cheating, and may result in disqualification:

- contestants must use only the TLX account and workstation assigned to them on each competition day;
- contestants must not try to tamper with or compromise the grading system;
- contestants must not attempt to gain access to root or any account other than the one assigned to them;
- contestants must not touch any workstation other than the one assigned to them;
- contestants must not attempt to bring items not explicitly allowed in “Supplies” into the contest room;
- contestants must not attempt to access any machine on the network or the Internet, other than to access the contest system for usual purposes (e.g. submitting tasks, viewing submission results, downloading sample data, submitting Clarification Requests); even running a single “ping” command is strictly prohibited and may lead to disqualification;
- contestants must not attempt to reboot or alter the boot sequence of any workstation;
- contestants must not communicate with other people during the competition, other than the invigilators, and/or Scientific/Technical Committee members;
- contestants must not attempt to gain any information about the tasks before the start of the contest;
- contestants must not reverse engineer the test data in order to solve the problems in highly test-data-dependent manners. One example of such behavior is using the feedback system to extract the test data and then applying this knowledge to build solutions adapted to the specific test cases in the grading system. This behavior would be considered cheating only if a contestant submits a solution that would solve significantly fewer test cases correctly if the test data were replaced by an equivalent set of test cases (e.g., one generated with a different random seed).
