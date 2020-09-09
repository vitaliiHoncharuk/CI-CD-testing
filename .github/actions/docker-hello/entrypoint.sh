#!/usr/bin/sh -l

echo "Hello $1"
time= $(date)
echo "::set-output name=time::$time"

echo "::group Some logs"
echo "Some logs"
echo "Some logs"
echo "::endgroup::"
