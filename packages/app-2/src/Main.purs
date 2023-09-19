module Main where

import Prelude

import Effect (Effect)
import Halogen as H
import Halogen.Aff as HA
import Halogen.HTML as HH
import Halogen.VDom.Driver (runUI)
import Web.HTML (HTMLElement)

mount :: HTMLElement -> Effect Unit
mount container =
  HA.runHalogenAff do
    runUI component unit container

-- Assuming you have defined a root component for your application
component :: forall query input output m. H.Component query input output m
component = H.mkComponent
  { initialState: identity
  , render
  , eval: H.mkEval $ H.defaultEval
  }
  where
  render _ = HH.text "app 2"
