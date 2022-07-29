import { Link, styled } from "@modulz/design-system";
import {
  CSS,
} from "@modulz/design-system/dist/stitches.config";
import type { VariantProps } from "@modulz/design-system/dist/stitches.config"
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import React, { forwardRef } from "react";

const DEFAULT_TAG = "a";
type ExternalLinkCSSProp = { css?: CSS };
type ExternalLinkVariants = VariantProps<typeof Link>;
type ExternalLinkOwnProps = ExternalLinkCSSProp & ExternalLinkVariants;

const StyledExternalLink = styled(Link);

type ExternalLinkComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  ExternalLinkOwnProps
>;

export const ExternalLink = React.forwardRef((props, forwardRef) => {
  return <StyledExternalLink {...props} ref={forwardRef} target="_blank" />;
}) as ExternalLinkComponent;
