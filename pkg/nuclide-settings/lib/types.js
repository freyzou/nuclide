'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

export type SettingsData = {
  name: string;
  description: string;
  keyPath: string;
  onChange: (value: any) => mixed;
  title: string;
  value: ?any;
};

export type SettingsPropsDefault = {
  title: string;
  description: string;
  keyPath: string;
  onChange: (value: any) => mixed;
};
