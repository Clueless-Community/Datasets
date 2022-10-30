2017-02-23
Global Fishing Watch
This document describes three csv files published along with a report by Global Fishing Watch and SkyTruth. For description of how these files were created, see:


Kroodsma, D.A., N.A. Miller and A. Roan 2017. “The Global View of Transshipment: Preliminary Findings.” Global Fishing Watch and SkyTruth, February 2017. Available online at http://globalfishingwatch.org.


Included files:
• Potential_Transshipments_20170222.csv
• Likely_Transshipments_20170222.csv
• Refrigerated_Cargo_Vessel_List_2017022.csv




Potential_Transshipments_20170222.csv
-----------------------------------------------------------------------
CSV File
Description:
Events where a refrigerated cargo vessel was travelling at less than 2 knots for at least 8 hours while 20 nautical miles or more from shore from 2012 to 2016.


Field: Description, Type


mmsi:  mmsi value for refrigerated cargo vessel, integer
latitude: latitude where event began in degrees, float
longitude: longitude where event began in degrees, float
event_start_time: datetime when event began (UTC), timestamp
ssduration_hrs: length of event in hours, float
flag_iso3: reefer vessel flag state in ISO3 designation, string




Likely_Transshipments_20170222.csv
-------------------------------------------------------------------------
CSV File
Description:
Events where a refrigerated cargo vessel (‘reefer’) and a likely fishing vessel were within 500 meters of each other for greater than 3 hours while 20 nautical miles from shore.


Field: Description, Type


reefer_mmsi: mmsi of refrigerated cargo vessel, integer
fishing_mmsi: mmsi of likely fishing vessel, integer
latitude: latitude where encounter began in degrees, float
longitude: longitude where encounter began in degrees, float
event_start_time: timestamp when event began (UTC), timestamp
event_end_time: timestamp when event concluded (UTC), timestamp
reefer_flag_iso3: reefer vessel flag state in ISO3 designation, string
fishing_flag_iso3: fishing vessel flag state in ISO3 designation, string


Refrigerated_Cargo_Vessel_List_20170222.csv
---------------------------------------------------------------------------
CSV File
Description:
List of refrigerated cargo vessels, with MMSI, IMO, call sign, vessel name, flag state, best estimate of last active date, and the date at which name/mmsi/call-sign changed (if applicable). 


Details:
The vessel_name is the vessel's name on the last_active_date. The former_name is the name (if any) the vessel had immediately prior to the current name.
The change_date field is the date that the vessel_name (or mmsi, call_sign, flag_state) changed for that vessel.
If a vessel has had multiple names/mmsi/flag states since 2012-01-01, that vessel will have multiple rows in the table with a row for each change. To trace a vessel's entire history it is necessary to join on both the former_name and change_date, as these two fields should provide a unique link between sequential entries for a single vessel. If a vessel has an imo, selecting a single imo should return all former vessel names/mmsi/callsign, etc. associated with that imo.
If no former_name or change_date is provided this indicates that the vessel has been active from 2012-01-01 until the last_active_date, with the listed mmsi, imo, name, and callsign.
Latest possible change_date is 2017-01-02.  


Field: Description, Type


mmsi: mmsi for refrigerated cargo vessel, integer
imo: imo number (if available) for refrigerated cargo vessel, integer
call_sign: international call sign (if available) for vessel, string
vessel_name: name of vessel on last_active_date, string
former_name: name of vessel prior to change_date, string
flag_state: flag state of the vessel with mmsi/call-sign/name, string
last_active_date: last date mmsi/callsign/vessel name was active, date
change_date: date vessel obtained mmsi/call-sign/vessel name (from former name), date