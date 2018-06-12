/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

/* eslint-disable nuclide-internal/prefer-nuclide-uri */

import path from 'path';
import invariant from 'assert';
import FileTreeActions from '../lib/FileTreeActions';
import FileTreeController from '../lib/FileTreeController';
import FileTreeStore from '../lib/FileTreeStore';

export const setup = () => {
  const fixturesPath = path.resolve(__dirname, './fixtures');
  atom.project.setPaths([fixturesPath]);
  const workspaceElement = atom.views.getView(atom.workspace);
  // Attach the workspace to the DOM so focus can be determined in tests below.
  const testContainer = document.createElement('div');
  invariant(document.body);
  document.body.appendChild(testContainer);
  testContainer.appendChild(workspaceElement);
  // console.log(document.body.innerHTML);
  const store = FileTreeStore.getInstance();
  const controller = new FileTreeController(store, new FileTreeActions(store));
  return {controller};
};
