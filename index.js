#!/usr/bin/env node
'use strict';

const script = process.argv[2];
require(`./scripts/${script}`);
